// Guards Example

interface Admin {
  role: "admin";
  permissions: string[];
}

interface User {
  role: "user";
  email: string;
}

type Person = Admin | User;

// Type Guard Function
function isAdmin(person: Person): person is Admin {
  return person.role === "admin";
}

function showInfo(person: Person): void {
  if (isAdmin(person)) {
    console.log("Admin Permissions:", person.permissions);
  } else {
    console.log("User Email:", person.email);
  }
}

showInfo({ role: "admin", permissions: ["read", "write"] });
showInfo({ role: "user", email: "user@example.com" });
