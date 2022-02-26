<template>
  <section class="section">
    <div class="container">
      <b-field v-for="(income, index) in incomes" :key="index" :label="`Ingreso ${index + 1}`">
        <b-input :value="income" @input="handleIncomeChange([index, $event])"/>
      </b-field>
      <b-button type="is-info" @click="addNewIncome">Añadir otro ingreso</b-button>
    </div>
  </section>
</template>

<script>
import {mapMutations, mapState} from "vuex";


export default {
  name: "Incomes",
  computed: mapState(["incomes"]),
  methods: mapMutations({
    addNewIncome: "ADD_NEW_INCOME",
    handleIncomeChange: "HANDLE_INCOME_CHANGE"
  })
}
</script>
