import axios from 'axios';
import { resolve } from 'core-js/fn/promise';

export default {
    methods: {
        //메서드 명에 $를 붙인 것은 하위 컴포넌트에서 동일한 메서드명을 사용힐 걍우 Mixins 파일의 메서드가 오버라이딩 되어 충돌하는 것을 방지하기 위함이다.
        //서버와의 데이터 통신을 위한 $api 메서드
        async $api(url, data) {
            return (
                await axios({
                    method: 'post',
                    url,
                    data,
                }).catch((e) => {
                    console.log(e);
                })
            ).data;
        },
        //제품 이미지를 서버로 업로드 하기 위해서 이미지 파일을 base64 String으로 변환하기 위한 $base64 메서드
        $base64(file) {
            return new Promise((resolve) => {
                var a = new FileReader();
                a.onload = (e) => resolve(e.target.result);
                a.readAsDataURL(file);
            });
        },
        //제품 가격의 금액 표기를 위한 $currencyFormat 메서드
        $currencyFormat(value, format = '#,###') {
            if (value == 0 || value == null) return 0;
            var currency = format.substring(0, 1);
            if (currency === '$' || currency === '\\') {
                format = format.substring(1, format.length);
            } else {
                currency = '';
            }

            var groupingSeparator = ',';
            var maxFractionDigits = 0;
            var decimalSeparator = '.';
            if (format.indexOf('.') == -1) {
                groupingSeparator = ',';
            } else {
                if (format.indexOf(',') < format.indexOf('.')) {
                    groupingSeparator = ',';
                    decimalSeparator = '.';
                    maxFractionDigits = format.length - format.indexOf('.') - 1;
                } else {
                    groupingSeparator = '.';
                    decimalSeparator = ',';
                    maxFractionDigits = format.length - format.indexOf(',') - 1;
                }
            }

            var prefix = '';
            var d = '';
            var dec = 1;
            for (var i = 0; i < maxFractionDigits; i++) {
                dec = dec * 10;
            }
            var v = String(Math.round(parseFloat(value) * dec) / dec);

            if (v.indexOf('-') > -1) {
                prefix = '-';
                v = v.substring(1);
            }

            if (maxFractionDigits > 0 && format.substring(format.length - 1, format.length) == '0') {
                v = String(parseFloat(v).toFixed(maxFractionDigits));
            }

            if (maxFractionDigits > 0 && v.indexOf('.') > -1) {
                d = v.substring(v.indexOf('.'));
                d = d.replace('.', decimalSeparator);
                v = v.substring(0, v.indexOf('.'));
            }
            var regExp = /\D/g;
            v = v.replace(regExp, '');
            var r = /(\d+)(\d{3})/;
            while (r.test(v)) {
                v = v.replace(r, '$1' + groupingSeparator + '$2');
            }

            return prefix + currency + String(v) + String(d);
        },
    },
};
