<template>
  <div class="widgets">
    <div class="row">
      <div class="col-md-6">
        <vue-panel vue-panel-title="Basic" class="with-scroll">
          <div class="progress">
            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
              <span class="sr-only">40% Complete (success)</span>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
              <span class="sr-only">20% Complete</span>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
              <span class="sr-only">60% Complete (warning)</span>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
              <span class="sr-only">80% Complete (danger)</span>
            </div>
          </div>
        </vue-panel>
        <vue-panel vue-panel-title="Striped" class="with-scroll">
          <div class="progress">
            <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
              <span class="sr-only">40% Complete (success)</span>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
              <span class="sr-only">20% Complete</span>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
              <span class="sr-only">60% Complete (warning)</span>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
              <span class="sr-only">80% Complete (danger)</span>
            </div>
          </div>
        </vue-panel>
      </div>
      <div class="col-md-6">
        <vue-panel vue-panel-title="With label" class="with-scroll">
          <div class="progress">
            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
              40% Complete (success)
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
              20% Complete
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
              60% Complete (warning)
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
              80% Complete (danger)
            </div>
          </div>
        </vue-panel>
        <vue-panel vue-panel-title="Animated" class="with-scroll">
          <div class="progress">
            <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
              <span class="sr-only">40% Complete (success)</span>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
              <span class="sr-only">20% Complete</span>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
              <span class="sr-only">60% Complete (warning)</span>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
              <span class="sr-only">80% Complete (danger)</span>
            </div>
          </div>
        </vue-panel>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <vue-panel vue-panel-title="Stacked" class="with-scroll">
          <div class="progress">
            <div class="progress-bar progress-bar-success" style="width: 35%">
              <span class="sr-only">35% Complete (success)</span>
            </div>
            <div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 20%">
              <span class="sr-only">20% Complete (warning)</span>
            </div>
            <div class="progress-bar progress-bar-danger" style="width: 10%">
              <span class="sr-only">10% Complete (danger)</span>
            </div>
            <div class="progress-bar progress-bar-info progress-bar-striped active" style="width: 20%">
              <span class="sr-only">20% Complete (warning)</span>
            </div>
          </div>
        </vue-panel>
      </div>
    </div>
  </div>
</template>

<script>
  import VuePanel from '../../components/vuePanels/vuePanels.vue'

  export default {components: {VuePanel}}

</script>

<style></style>
