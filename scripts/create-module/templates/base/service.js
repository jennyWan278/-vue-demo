import http from '@/http';
import convertKey from 'convert-key';

export default {
    fetchData: () => {
        const params = {};
        return http.post('/cats', params)
            .then(data => {
                console.log(data);
            })
    }
}