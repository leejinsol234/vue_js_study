// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    define: {
        // 프로덕션 빌드에서 수화 불일치 세부사항 활성화
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
    },
});
