class User {
  constructor(id, name, username, email, password, is_active, created_at) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.is_active = is_active;
    this.created_at = created_at;
  }
}

module.exports = User;
