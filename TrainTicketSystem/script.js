/* script.js — single-file app logic for all pages
   Pages detected via <body data-page="...">
   NOTE: Data here are demo/sample values. Replace with real data if you have it.
*/

const STATIONS = [
  { code: 'DHK', name: 'Dhaka', km: 0 },
  { code: 'CTG', name: 'Chattogram', km: 245 },
  { code: 'RJP', name: 'Rajshahi', km: 280 },
  { code: 'KHL', name: 'Khulna', km: 160 },
  { code: 'SYL', name: 'Sylhet', km: 210 },
  { code: 'RNG', name: 'Rangpur', km: 330 },
  { code: 'BRS', name: 'Barishal', km: 140 }
];

// Sample trains: route is ordered array of station codes
const TRAINS = [
  { id: 'T001', name: 'Sundarban Express', number: '601', route: ['DHK','KHL'], depart: '07:00', arrive: '11:30' },
  { id: 'T002', name: 'Chitra Express', number: '703', route: ['DHK','RJP'], depart: '08:15', arrive: '12:45' },
  { id: 'T003', name: 'Padma Express', number: '805', route: ['CTG','DHK','RJP'], depart: '06:00', arrive: '13:00' },
  { id: 'T004', name: 'Subarna Express', number: '901', route: ['DHK','CTG'], depart: '18:30', arrive: '23:00' }
];

/* ----- Utilities ----- */
function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }
function formatCurrency(v) { return `৳${v}`; }
function byCode(code){ return STATIONS.find(s=>s.code===code) || {name:code,km:0}; }

/* Populate station selects found on page */
function populateStationSelects() {
  const selects = qsa('select[id$="select"], select.select, select[id^="fare-"], #origin-select, #destination-select, #fare-origin, #fare-destination');
  const unique = new Set();
  // create options html
  const options = STATIONS.map(s => `<option value="${s.code}">${s.name} (${s.code})</option>`).join('');
  qsa('select').forEach(sel => {
    // only populate selects that appear to be station selects (we keep generic: fill all selects that are empty)
    if (!sel.dataset.noStations) {
      // skip payment-method select
      if (sel.id === 'payment-method' || sel.id === 'fare-class') return;
      // avoid overwriting selects that already have non-station options (basic heuristic)
      if (sel.options.length <= 1) {
        sel.innerHTML = `<option value="">Select</option>${options}`;
      }
    }
  });
}

/* Page init */
document.addEventListener('DOMContentLoaded', () => {
  // set min date for date inputs
  const today = new Date().toISOString().split('T')[0];
  qsa('input[type="date"]').forEach(inp => inp.setAttribute('min', today));

  populateStationSelects();

  const page = document.body.dataset.page;
  if (page === 'index') initIndex();
  if (page === 'schedule') initSchedule();
  if (page === 'train') initTrain();
  if (page === 'stations') initStations();
});

/* ------------------- INDEX PAGE ------------------- */
function initIndex(){
  const findBtn = qs('#find-trains-btn');
  findBtn?.addEventListener('click', () => {
    const origin = qs('#origin-select')?.value;
    const destination = qs('#destination-select')?.value;
    const date = qs('#journey-date')?.value;
    const time = qs('#journey-time')?.value;
    if (!origin || !destination || origin === destination) {
      alert('Please choose different origin and destination.');
      return;
    }
    // go to schedule with query params
    const params = new URLSearchParams({ origin, destination, date, time });
    location.href = `schedule.html?${params.toString()}`;
  });
}

/* ------------------- SCHEDULE PAGE ------------------- */
function initSchedule(){
  // parse query (if any) and preselect
  const url = new URL(location.href);
  const params = url.searchParams;
  const origin = params.get('origin') || '';
  const destination = params.get('destination') || '';
  const date = params.get('date') || '';
  if (origin) qs('#origin-select').value = origin;
  if (destination) qs('#destination-select').value = destination;
  if (date) qs('#journey-date').value = date;

  // render full list initially
  renderTrainList(TRAINS);

  qs('#search-btn')?.addEventListener('click', () => {
    const o = qs('#origin-select').value;
    const d = qs('#destination-select').value;
    const filtered = TRAINS.filter(t => {
      const idxO = t.route.indexOf(o);
      const idxD = t.route.indexOf(d);
      return o && d ? (idxO >= 0 && idxD >= 0 && idxO < idxD) : true;
    });
    renderTrainList(filtered);
  });
}

function renderTrainList(trains){
  const container = qs('#train-results');
  container.innerHTML = '';
  if (!trains.length) {
    container.innerHTML = `<p style="padding:12px">No trains found for selected route/date.</p>`;
    return;
  }
  trains.forEach(t => {
    const stopsText = t.route.map(code => byCode(code).name).join(' → ');
    const card = document.createElement('div');
    card.className = 'train-card';
    card.innerHTML = `
      <h4>${t.name} <small>(${t.number})</small></h4>
      <p><strong>Route:</strong> ${stopsText}</p>
      <p><strong>Depart:</strong> ${t.depart} &nbsp;&nbsp; <strong>Arrive:</strong> ${t.arrive}</p>
      <div style="display:flex;gap:8px;margin-top:8px">
        <a class="btn primary" href="train.html?train=${t.id}">View Seats</a>
        <a class="btn ghost" href="train.html?train=${t.id}">Book Now</a>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ------------------- TRAIN PAGE (Seat selection & payment) ------------------- */
function initTrain(){
  const params = new URL(location.href).searchParams;
  const trainId = params.get('train') || params.get('id');
  const date = params.get('date') || (new Date().toISOString().split('T')[0]);
  const train = TRAINS.find(t=>t.id === trainId);
  if (!train) {
    qs('#train-info').innerHTML = '<p>Train not found. Go back to <a href="schedule.html">Schedule</a>.</p>';
    return;
  }

  // render train info
  const routeNames = train.route.map(c => byCode(c).name).join(' → ');
  qs('#train-info').innerHTML = `
    <h3>${train.name} (${train.number})</h3>
    <p><strong>Route:</strong> ${routeNames}</p>
    <p><strong>Departure:</strong> ${train.depart} &nbsp;&nbsp; <strong>Arrival:</strong> ${train.arrive}</p>
    <p><strong>Date:</strong> ${date}</p>
  `;

  // seat configuration
  const seatCount = 24;        // demo: 24 seats
  const seatPrice = 500;       // demo: ৳500 per seat
  const maxSelect = 6;         // max seats per booking

  const seatLayout = qs('#seat-layout');
  seatLayout.innerHTML = '';

  // load already-booked seats for this train+date from localStorage
  const storageKey = `booked_${trainId}_${date}`;
  let booked = JSON.parse(localStorage.getItem(storageKey) || '[]'); // array of seat numbers

  // create seats
  for (let i = 1; i <= seatCount; i++) {
    const el = document.createElement('div');
    el.className = 'seat';
    el.dataset.seat = i;
    el.textContent = i;
    if (booked.includes(i)) el.classList.add('booked');
    el.addEventListener('click', () => onSeatClick(el));
    seatLayout.appendChild(el);
  }

  // selection state & timer
  let selectedSeats = [];
  let timer = null;
  let timeLeft = 0;

  function onSeatClick(el){
    const sn = Number(el.dataset.seat);
    if (el.classList.contains('booked')) return;
    if (el.classList.contains('selected')) {
      el.classList.remove('selected');
      selectedSeats = selectedSeats.filter(s => s !== sn);
    } else {
      if (selectedSeats.length >= maxSelect) {
        alert(`You can select a maximum of ${maxSelect} seats per booking.`);
        return;
      }
      el.classList.add('selected');
      selectedSeats.push(sn);
      // start timer if not running
      if (!timer) startTimer();
    }
    updateSummary();
  }

  function updateSummary(){
    qs('#selected-count').textContent = selectedSeats.length;
    qs('#total-price').textContent = formatCurrency(selectedSeats.length * seatPrice);
  }

  function startTimer(){
    timeLeft = 120; // seconds
    qs('#timer-message').textContent = `⏳ You have ${timeLeft} seconds to complete payment.`;
    timer = setInterval(() => {
      timeLeft--;
      qs('#timer-message').textContent = `⏳ You have ${timeLeft} seconds to complete payment.`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        timer = null;
        // release seats
        qsa('.seat.selected').forEach(s => s.classList.remove('selected'));
        selectedSeats = [];
        updateSummary();
        qs('#timer-message').textContent = '⏰ Time expired — selection released.';
      }
    }, 1000);
  }

  // payment UI switching
  qs('#payment-method')?.addEventListener('change', (e) => {
    const v = e.target.value;
    const pd = qs('#payment-details');
    pd.innerHTML = '';
    if (v === 'bkash' || v === 'nagad') {
      pd.innerHTML = `
        <label>Mobile Number (e.g. 01XXXXXXXXX)</label>
        <input id="mobile-num" placeholder="01XXXXXXXXX" />
        <label>Transaction ID (mock)</label>
        <input id="tx-id" placeholder="TX12345" />
      `;
    } else if (v === 'card') {
      pd.innerHTML = `
        <label>Card Number</label><input id="card-no" placeholder="4111 1111 1111 1111" />
        <label>Expiry (MM/YY)</label><input id="card-exp" placeholder="MM/YY" />
        <label>CVV</label><input id="card-cvv" placeholder="123" />
      `;
    }
  });

  // confirm payment
  qs('#confirm-payment')?.addEventListener('click', () => {
    const payment = qs('#payment-method').value;
    if (!selectedSeats.length) { alert('Please select at least one seat.'); return; }
    if (!payment) { alert('Please select a payment method.'); return; }

    // validate payment inputs (mock)
    if (payment === 'bkash' || payment === 'nagad') {
      const mobile = qs('#mobile-num')?.value?.trim();
      const tx = qs('#tx-id')?.value?.trim();
      if (!mobile || !tx) { alert('Enter mobile number and transaction id.'); return; }
    }
    if (payment === 'card') {
      const cardNo = qs('#card-no')?.value?.trim();
      const exp = qs('#card-exp')?.value?.trim();
      const cvv = qs('#card-cvv')?.value?.trim();
      if (!cardNo || !exp || !cvv) { alert('Enter valid card details (demo).'); return; }
    }

    // finalize booking (mock): save seats as booked
    clearInterval(timer); timer = null;
    booked = booked.concat(selectedSeats).sort((a,b)=>a-b);
    localStorage.setItem(storageKey, JSON.stringify(booked));
    // mark seats as booked in UI
    selectedSeats.forEach(sn => {
      const seatEl = qs(`.seat[data-seat="${sn}"]`);
      if (seatEl) {
        seatEl.classList.remove('selected');
        seatEl.classList.add('booked');
      }
    });

    // show confirmation summary
    const confirmation = qs('#confirmation');
    confirmation.style.display = 'block';
    confirmation.innerHTML = `
      <h4>🎉 Booking Confirmed</h4>
      <p><strong>Train:</strong> ${train.name} (${train.number})</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Seats:</strong> ${selectedSeats.join(', ')}</p>
      <p><strong>Total Paid:</strong> ${formatCurrency(selectedSeats.length * seatPrice)}</p>
      <p style="font-size:0.9rem;color:#444;margin-top:6px;">(This is a demo confirmation — integrate a real payment gateway for production.)</p>
    `;
    // reset selection
    selectedSeats = [];
    updateSummary();
    qs('#timer-message').textContent = '';
  });

  // back to schedule link includes train id
  qs('#back-schedule').href = `schedule.html?train=${trainId}`;
}

/* ------------------- STATIONS PAGE ------------------- */
function initStations(){
  // populate table
  const tbody = qs('#stations-table tbody');
  tbody.innerHTML = '';
  STATIONS.forEach((s, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${idx+1}</td><td>${s.code}</td><td>${s.name}</td><td>${s.km}</td>`;
    tbody.appendChild(tr);
  });

  // fare calculation
  qs('#calc-fare')?.addEventListener('click', () => {
    const orig = qs('#fare-origin').value;
    const dest = qs('#fare-destination').value;
    const cls = qs('#fare-class').value;
    if (!orig || !dest || orig === dest) { alert('Choose different origin and destination.'); return; }
    const o = STATIONS.find(s=>s.code===orig);
    const d = STATIONS.find(s=>s.code===dest);
    const distance = Math.abs((o?.km || 0) - (d?.km || 0));

    // demo per-km rates by class
    const rates = { shovon: 2.5, ac: 5.0, first: 7.0 };
    const rate = rates[cls] || 2.5;
    // fare = base + distance * rate (rounded)
    const base = 30;
    const raw = base + (distance * rate);
    const fare = Math.round(raw);

    qs('#fare-result').textContent = `Distance: ${distance} km → Fare (${cls}): ${formatCurrency(fare)} (demo)`;
  });
}
