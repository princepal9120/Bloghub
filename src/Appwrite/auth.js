import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";
// use this tempate for future project also use this for other database lk firebase
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
      try {
        const userAccount = await this.account.create(
          ID.unique(),
          email,
          password,
          name
        );
        if (userAccount) return this.login({email,password})
        else return userAccount;
      } catch (error) {
        throw error;
      }
    }
    async login({ email, password }) {
      try {
        return await this.account.createEmailSession(email, password);
      } catch (error) {
        throw error;
      }
    }
    async getCurrentuser(){
        try{
       return await this.account.get();
        }catch(error){  
            console.log("getCurrentuser error:: ",error);
        }

        return null;
    }
    async logout {
        try {
        await this.account.deleteSessions(email, password);
        } catch (error) {
          throw error;
        }
      }

}
const authService = new AuthService();
export default authService
