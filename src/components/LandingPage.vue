<template>
    <div>
      <h1>Insert a new login and password</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="service">Application:</label>
          <input type="text" v-model="formData.service" id="service" required>
        </div>
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="formData.username" id="username" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="formData.password" id="password" required>
        </div>
        <button type="submit">Submit</button>
      </form>
      <button @click="fetchAllRecords">List</button>
    <div v-if="records.length > 0">
      <h2>All Records</h2>
      <ul>
        <li v-for="record in records" :key="record._id">
          {{ record.service }} - {{ record.username }} - {{ record.password }}
        </li>
      </ul>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          service: '',
          username: '',
          password: ''
        },
        records: [],
        errorMessage: ''
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await fetch('http://localhost:3000/records', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.formData)
          });
          const result = await response.json();
          if (response.ok) {
            alert('Record created successfully!');
          } else {
            alert('Error: ' + result.error);
          }
        } catch (error) {
          alert('Network error: ' + error.message);
        }
      },
      async fetchAllRecords() {
      try {
        const response = await fetch('http://localhost:3000/getAll');
        const result = await response.json();
        if (response.ok) {
          this.records = result;
          this.errorMessage = '';
        } else {
          this.errorMessage = result.error;
          this.records = [];
        }
      } catch (error) {
        this.errorMessage = 'Network error: ' + error.message;
        this.records = [];
      }
    }
    }
  };
  </script>
  
  <style scoped>
  div {
    margin-bottom: 10px;
  }
  label {
    display: inline-block;
    width: 100px;
  }
  input {
    padding: 5px;
    width: 200px;
  }
  button {
    padding: 5px 10px;
  }
  </style>
  