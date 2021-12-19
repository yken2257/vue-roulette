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
    <!-- <div class="block">
      <div class="content">
        <p>{{rotation}}</p>
        <p>{{count}}</p>
        <p>{{step}}</p>
        <p>{{spin}}</p>
      </div>
    </div> -->
  </div>
  <div class="column">
    <div class="block">
      <div class="field">
        <label class="label">お名前</label>
      </div>
      <div class="field has-addons" v-for="(label,index) in labels" :key="label.id">
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
          <div class="buttons">
            <button class="button is-info" v-on:click="addItem()">追加</button>
            <button class="button is-info is-light" v-on:click="resetItems()">リセット</button>
          </div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="field">
        <label class="label">回す強さ</label>
      </div>
      <div class="field has-addons">
        <div class="control">
          <input class="input is-info" type="number" v-model="speed" min="1" max="10">
        </div>
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
    const data = ref([1, 1, 1, 1, 1])
    const labels = ref(shuffle(["田中", "金", "吉田", "中田", "佐々木"])) 
    const baseColors = ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED', '#AFB4DB', '#6EA4CA', '#6283C2', '#659AD2']
    const colors = ref(shuffle(baseColors).slice(0,5))
    const status = ref("on")
    const rotation = ref(0)
    const step = ref(chooseDuration())
    const showResult = ref(false)
    const picked = ref("")
    const speed = ref(8)
    
    const count = ref(0)
    const modDeg = ref(0)
    const pickedIndex = ref(0)
    const spin = ref(chooseSpin())
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

    function chooseDuration() {
      return Math.random() * (35-30) + 30
    }

    function chooseSpin() {
      var array = [1, -1]
      return array[Math.floor(Math.random()*2)]
    }

    function chooseColor() {
      return baseColors[Math.round(Math.random()*baseColors.length)]
    }
    
    function addItem() {
      labels.value = labels.value.concat([''])
      data.value = data.value.concat([1])
      colors.value = colors.value.concat([chooseColor()])
    }

    function resetItems() {
      labels.value = ["", "", ""]
      data.value = [1, 1, 1]
      colors.value = shuffle(baseColors).slice(0,3)
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
        rotation.value -= modDeg.value - 360 
        if (rotation.value == 0) {rotation.value -= 360}
        spin.value =  spin.value * -1 
        if (labels.value.length > 1) {
          labels.value.splice(pickedIndex.value, 1)
          data.value = data.value.slice(0, labels.value.length)
          colors.value = colors.value.slice(0, labels.value.length)
        }
    }
    
    function startRoulette() {
      setTimeout(function countDown(){
        if (status.value == "on"){
          if (step.value > 0) {
            step.value -= (11 - speed.value)*0.1
            rotation.value += step.value * spin.value
            interval.value += 1 
            setTimeout(countDown, interval.value)
          } else {
            status.value == "off"
            modDeg.value = rotation.value % 360
            if (rotation.value > 0) {
              pickedIndex.value = labels.value.length-1-Math.floor(Math.abs(modDeg.value)/(360/labels.value.length))
            } else if (rotation.value < 0) {
              pickedIndex.value = Math.floor(Math.abs(modDeg.value)/(360/labels.value.length))
            }
            picked.value = testData.value.labels[pickedIndex.value]
            setTimeout(function () {showResult.value = true}, 2000) 
            count.value = 0
            interval.value = 1
            step.value = chooseDuration()
          }
          count.value++
        } else if (status.value == "off") {
          return;
        }
      }, interval.value)
    }

    return { speed, labels, testData, options, showResult, picked, addItem, deleteItem, resetItems, startRoulette, closeModal };
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
