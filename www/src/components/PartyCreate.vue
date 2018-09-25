<template>
    <div class="container">
      <div class="row">
        <div class="col-xs-offset-3 col-xs-6">
          <div class="add-board-form">
            <form type="submit" @submit.prevent="createBoard">
              <div class="form-group">
                <input name="name" type="text" class="form-control" placeholder="Name" v-model="newBoard.name">
              </div>
              <div class="form-group">
                <input name="description" type="text" class="form-control" placeholder="Description" v-model="newBoard.description">
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-default navbar-btn">Submit Party</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
    export default {
      name: 'partyCreate',
      data() {
        return {
          newBoard: {}
        }
      },
      mounted() {
        this.$store.dispatch('getBoards')
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
