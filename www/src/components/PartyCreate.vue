<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-3 col-xs-6">
        <div class="add-board-form">
          <form type="submit" @submit.prevent="createParty">
            <div class="form-group">
              <input name="name" type="text" class="form-control" placeholder="Party Title" v-model="newParty.title">
            </div>
            <datepicker v-model="newParty.date" :disabledDates="disabledDates"></datepicker>
            <div class="form-group">
              <input name="name" type="text" class="form-control" placeholder="Location" v-model="newParty.Location">
            </div>
            <div class="form-group">
              <input name="description" type="text" class="form-control" placeholder="Description" v-model="newParty.description">
            </div>
            <button>Create a Party</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';

  export default {
    components: {
      Datepicker
    },

    name: 'partyCreate',
    data() {
      return {
        newBoard: {},
        newParty: {
          date: new Date(),
        },
        disabledDates: {
          daysOfMonth: [29, 30, 31]
        }
      }
    },
    mounted() {
      this.$store.dispatch('getBoards');
      this.$store.dispatch('getDisabledDates');
    },
    computed: {
      boards() {
        return this.$store.state.boards
      },
      activeBoard() {
        return this.$store.state.activeBoard
      },
      lists() {
        return this.$store.state.lists
      },
    },
    methods: {
      createBoard() {
        this.$store.dispatch('createBoard', this.newBoard)
        this.newBoard = {};
      },
      createParty() {
        this.$store.dispatch('createParty', this.newParty)
        this.newParty = {};
      },
      removeBoard(board) {
        this.$store.dispatch('removeBoard', board)
      },
      getBoard(id) {
        console.log('get board in compnent')
        this.$store.dispatch('getBoard', id)
      }
    }
  }
</script>

<style>

</style>
