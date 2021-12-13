<template>
<div class="columns">
  <div class="column is-two-fifths is-offset-2" id="roulette">
    <div class="block">
      <img src="./assets/logo.png" height="40" width="40">
      <PieChart :chartData="testData" :options="options"/>
    </div>
    <div class="block">
      <button class="button is-info" v-on:click="startRoulette()">回転</button>
    </div>
  </div>
  <div class="column">
    <div class="field has-addons" v-for="(label,index) in labels" :key="label">
      <div class="control">
        <input class="input is-info" type="text" v-model="labels[index]">
      </div>
      <div class="control">
        <a class="button is-info" v-on:click="deleteItem(index)">
          削除
        </a>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-info" v-on:click="onAddItem()">追加</button>
      </div>
    </div>
  </div>
</div>
<div class="modal" v-bind:class="{'is-active':showResult}" id="modal">
  <div class="modal-background" @click="closeModal"></div>
  <div class="modal-content">
    <div class="notification is-info is-light" @click="closeModal">
        選ばれたのは<strong>{{picked}}さん</strong>でした！
    </div>
  </div>
</div>
</template>

<script>
import { shuffle } from 'lodash';
import { computed, ref, reactive } from 'vue';
import { Chart, registerables } from "chart.js";
import { PieChart } from 'vue-chart-3';
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.register(...registerables);
Chart.register(ChartDataLabels);

export default {
  name: 'App',
  components: { PieChart },
  setup() {
    const data = ref([1, 1, 1, 1])
    const labels = ref(shuffle(["田中", "金", "吉田", "中田"])) 
    const colors = ref(['#77CEFF', '#0079AF',  '#97B0C4', '#A5C8ED']) 
    const baseColors = ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED', '#AFB4DB', '#6EA4CA', '#6283C2', '#659AD2']
    const status = ref("on")
    const rotation = ref(0)
    const step = Math.random() * (35-30) + 30
    const x = ref(step * step * 5 / 2)
    const finalDegree = ref(Math.random() * 360 + x.value - 360)
    const showResult = ref(false)
    const picked = ref("")
    
    const count = ref(0)
    const modDeg = ref(0)
    const i = ref(0)
    const interval = ref(1)

    const options = reactive({
      responsive: true,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: false,
        },
        datalabels: {
            formatter: function(value, context) {
                return context.chart.data.labels[context.dataIndex];
            },
            font: {
              weight: 'bold',
              size: 24,
            }
        }
      },
    });

    const testData = computed(() => ({
      labels: labels.value,
      datasets: [
        {
          data: data.value,
          backgroundColor: colors.value, 
          rotation: rotation.value
        },
      ],
    }));

    function chooseColor() {
      return baseColors[Math.round(Math.random()*baseColors.length)]
    }
    
    function onAddItem() {
      labels.value = labels.value.concat([''])
      data.value = data.value.concat([1])
      colors.value = colors.value.concat([chooseColor()])
    }

    function deleteItem(index) {
        if (labels.value.length > 1) {
          labels.value.splice(index, 1)
          data.value = data.value.slice(0, labels.value.length)
          colors.value = colors.value.slice(0, labels.value.length)
        }
    }

    function closeModal() {
        showResult.value = false
        rotation.value += modDeg.value
        if (labels.value.length > 1) {
          labels.value.splice(i.value, 1)
          data.value = data.value.slice(0, labels.value.length)
          colors.value = colors.value.slice(0, labels.value.length)
          // rotation.value = 0
        }
    }
    
    function startRoulette() {
      setTimeout(function contDown(){
        if (status.value == "on"){
          if (-rotation.value < finalDegree.value) {
            rotation.value -= step - count.value*0.2
            interval.value += 1 
            if (count.value > 90) {
              interval.value += 0.5;
            }
            setTimeout(contDown, interval.value)
          } else {
            status.value == "off"
            modDeg.value = -rotation.value % 360
            i.value = Math.floor(modDeg.value/(360/labels.value.length))
            picked.value = testData.value.labels[i.value]
            setTimeout(function () {showResult.value = true}, 2000) 
            finalDegree.value += Math.random() * 360 + x.value - 720
            count.value = 0
            interval.value = 1
          }
          count.value++
        } else if (status.value == "off") {
          return;
        }
      }, interval.value)
    }

    return { labels, count, rotation, finalDegree, testData, deleteItem, startRoulette, options, closeModal, showResult, picked, onAddItem };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}

#roulette {
  text-align: center;
}

#modal {
  text-align: center;
}
</style>
