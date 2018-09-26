<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-3 col-xs-6">
        <div class="add-board-form">
            <div class="form-group">
              <router-link to="PartyCreate">
                <button type="submit" class="btn btn-default navbar-btn">Create a Party</button>
              </router-link>
            </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-6">
        <h2>My Parties</h2>
        <div class="row board-wrapper">
          <div class="col-xs-12 board-link" v-for="party in parties">
            <router-link :to="'/parties/'+party._id" class="linked-text">
              <h4>
                <span v-on:mouseover="getBoard(board._id)" @click="getBoard(board._id)">{{party.title}}</span>
              </h4>
            </router-link>
            <span class="glyphicon glyphicon-remove" @click="removeBoard(board)"></span>
          </div>
        </div>

      </div>
      <div class="col-xs-6">
        <h2>Preview Party</h2>
        <div class="board-wrapper" v-if="activeBoard.hasOwnProperty('name')">
          <h3>{{activeBoard.name}}</h3>
          <h5>Lists: {{lists.length}}</h5>
          <h5>Created: {{new Date(Number(activeBoard.created)).getMonth() + 1}}/{{new
            Date(Number(activeBoard.created)).getDate()}}/{{new
            Date(Number(activeBoard.created)).getFullYear()}}
          </h5>
        </div>
        <div v-else>
          <p>Mouse over a party to preview.</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

  export default {
    name: 'boards',
    data() {
      return {
        newBoard: {},
      }
    },
    mounted() {
      this.$store.dispatch('getParties')
    },
    computed: {
      boards() {
        return this.$store.state.boards
      },
      parties() {
        return this.$store.state.parties
      },
      activeBoard() {
        return this.$store.state.activeBoard
      },
      lists() {
        return this.$store.state.lists
      },
    },
    methods: {
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

<style scoped>
  h4 {
    font-size: 1.8em;
    color: #D66D40
  }

  .board-wrapper {
    font-family: 'Roboto', sans-serif;
    color: #CCD1B3;
  }

  .board-link {
    margin: 20px 0;
  }
</style>
