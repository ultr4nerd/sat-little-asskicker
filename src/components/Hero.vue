<template>
  <header class="hero is-info">
    <div class="hero-body">
      <p class="title has-text-centered">
        Calculadora de impuestos
      </p>
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">ISR</p>
            <p class="title">${{ displayAmount(isr) }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">IVA</p>
            <p class="title">${{ displayAmount(iva) }}</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <p class="heading">Total por pagar</p>
            <p class="title">${{ displayAmount(totalTaxes) }}</p>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Hero",
  computed: mapGetters(["isr", "iva", "totalTaxes"]),
  methods: {
    displayAmount(amount) {
      return amount?.toFixed(2) || "0.00"
    }
  }
}
</script>
