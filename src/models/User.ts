class User {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  // TODO: Add Validation Logic
  validate(): boolean {
    // Perform validation logic
    // Return true or false based on validation result
    return true;
  }
}

export default User;
