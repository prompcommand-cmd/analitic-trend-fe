<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #header>
        <img alt="user header" src="/images/usercard.png" />
    </template>
    <template #title>Advanced Card</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
            quas!
        </p>
    </template>
    <template #footer>
        <div class="flex gap-4 mt-1">
            <Button label="Cancel" severity="secondary" variant="outlined" class="w-full" />
            <Button label="Save" class="w-full" />
        </div>
    </template>
</Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import { ref, onMounted } from "vue";
import { GetAllOrderTrend } from "@/dashboard/@service/dashboard-service";

const dataTrend = ref([]);

onMounted(async () => {
  const params = {};
  GetAllOrderTrend(params).then((response) => {
    dataTrend.value = response;
  });
});
</script>
