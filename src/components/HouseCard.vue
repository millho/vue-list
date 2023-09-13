<template>
    <router-link :to="{ name: 'House Details', params: { houseId: house.id } }">
        <div class="card bg-light elevation-5">
            <section class="row m-3">
                <div class="col-6">
                    <img class="img-fluid" :src="house.img" alt="house">
                </div>
                <div class="col-6">
                    Year:{{ house.year }}
                    Bedrooms:{{ house.bedrooms }}
                    Bathrooms:{{ house.bathrooms }}
                    Levels:{{ house.levels }}
                    Price:{{ house.price }}
                </div>
                <div class="col-12 p-3">
                    {{ house.description }}
                </div>
            </section>
        </div>
    </router-link>
</template>

<script>
import { House } from '../models/House';

export default {
    props: { house: { type: House, required: true } },
    setup() {
        return {};
    },
};
</script>


<style></style>