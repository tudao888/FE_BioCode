export class Account {
  id: number;
  username: String;
  password: String;
  email: String;
  avatar: String;
  address: String;
  phone: String;

  constructor(id: number, username: String, password: String, email: String, avatar: String, address: String, phone: String) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.avatar = avatar;
    this.address = address;
    this.phone = phone;
  }
}
