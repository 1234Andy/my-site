export default function fatchData(defaultDataValue = null) {
    return {
        data() {
            return {
                data: defaultDataValue,
                isLoading: true
            }
        },
        async created() {
            this.data = await this.fatchData();
            this.isLoading = false;
        }
    }
}