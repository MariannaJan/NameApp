<template>
  <div class="hello">
      <div class="holder">
        <form @submit.prevent="addName">
          <input type="text" placeholder="Input the name" v-model="name" v-validate="'min:3'" name="name">
          <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">  
            <p class="alert" v-if="errors.has('name')">{{ errors.first('name') }} </p>
          </transition>
        </form>
        <ul>
          <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
            <li v-for="(info, index) in names" :key='index'> {{info.name}} 
              <i class="fa fa-minus-circle" v-on:click="remove(index)"></i> 
            </li>
          </transition-group>
        </ul>
        <p>{{ title }}</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Those are the names you have chosen.",
      name: "",
      names: [{ name: "Sean" }, { name: "Lorelei" }]
    };
  },
  methods: {
    addName() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.names.push({ name: this.name });
          this.name = "";
        }
      });
    },
    remove(id) {
      this.names.splice(id, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}

.alert-in-enter-active {
  animation: bounce-in 0.5s;
}

.alert-in-leave-active {
  animation: bounce-in 0.7s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

i {
  float: right;
  cursor: pointer;
}
</style>
