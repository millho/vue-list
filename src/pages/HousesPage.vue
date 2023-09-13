<template>
    <div class="container-fluid">
        <section class="row g-3">
            <div v-for="house in houses" :key="house.id" class="col-6">
                <HouseCard :house="house" />
            </div>
        </section>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { housesService } from '../services/HousesService';
import Pop from '../utils/Pop';

export default {
    setup() {
        onMounted(() =>
            getHouses()
        );
        async function getHouses() {
            try {
                await housesService.getHouses()
            } catch (error) {
                Pop.error(error)
            }
        }
        return {};
    },
};
</script>


<style></style>