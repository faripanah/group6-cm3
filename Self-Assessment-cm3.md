# Self-Assessment cm3



##Javascript
- DIFFICULTIES CONNECTING FRONTEND WITH BACKEND

On the frontend side, we had difficulties establishing the connection with the backend. However, after carefully reading the instructions provided by the professor, we finally managed to resolve the issue and successfully establish the connection.

```javascript



    	import { defineConfig } from 'vite'
    	import react from '@vitejs/plugin-react'
    
    	// https://vitejs.dev/config/
    
    	export default defineConfig({
      	plugins: [react()],
      	server: {
        	port: 3000,
        	proxy: {
        	  '/api': {
            	target: 'http://localhost:4000',
            	changeOrigin: true,
         	 },
       	 }
      	},
    	})

````

-On the backend side, we had a syntax error.
```javascript

  		name: { type: String, required: true },
  		userName: { type: String, required: true, unique: true },
  		password: { type: String, required: true },
  		phone_Number: { type: String, required: true },
  		gender: { type: String, required: true },
 	 	Date_of_birth: { type: Date, required: true },
````





-By correcting the fields in the code provided by the professor, we were able to successfully establish the connection.

```javascript

	const mongoose = require("mongoose");

	const Schema = mongoose.Schema;

	const userSchema = new Schema({
  	name: { type: String, required: true },
 	 username: { type: String, required: true, unique: true },
  	password: { type: String, required: true },
  	phone_number: { type: String, required: true },
  	gender: { type: String, required: true },
  	date_of_birth: { type: Date, required: true },
 	 membership_status: { type: String, required: true },
 	 bio: { type: String },
 	 address: { type: String, required: true },
  	profile_picture: { type: String, required: false }
	}, { timestamps: true, versionKey: false });

	module.exports = mongoose.model("User", userSchema);



