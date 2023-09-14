<template>
    {{ activeHouse.price }}
</template>

<script>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { housesService } from '../services/HousesService';

export default {
    setup() {
        const route = useRoute()
        // const router = useRouter()

        onMounted(() => getHouseById())

        async function getHouseById() {
            try {
                const houseId = route.params.houseId
                await housesService.getHouseById(houseId)
            } catch (error) {
                Pop.error(error)
            }
        }
        return {
            activeHouse: computed(() => AppState.activeHouse),
            account: computed(() => AppState.account)
        };
    },
};
</script>


<style></style>