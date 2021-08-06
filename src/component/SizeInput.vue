<template>
  <div class="pfi-w">
    <div class="pi-w">
        <input
            type="number"
            :min="min"
            :placeholder="placeholder1"
            v-model="min"
            class="pi"
        />
    </div>
    <span class="-phs">-</span>
    <div class="pi-w">
    <input
        type="number"
        :min="min"
        :placeholder="placeholder2"
        v-model="max"
        class="pi"
    />
    </div>
</div>
</template>

<script>
export default {
    name: 'sizeInput',
    props: ['min', 'max', 'placeholder1', 'placeholder2']

}
</script>


<style lang="scss" scoped>
          .pfi-w {
            width: 100%;
            align-items: center;
            display: flex;
            margin-bottom: 16px;

            .pi-w {
              padding: 4px;
              font-size: 12px;
              height: 32px;
              width: 100%;
              align-items: center;
              display: flex;
              border: 1px solid #ededed;
              border-radius: 4px;

              .pi {
                font-size: 0.875rem;
                min-width: 0;
                height: 32px;
                width: 100%;
                color: #282828;
                border: none;
                overflow: visible;

                &:focus {
                  outline: none;
                }
              }
            }
            .-phs {
                padding: 0 8px;
                font-size: 1rem;
            }
        }
</style>