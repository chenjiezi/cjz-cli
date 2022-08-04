/*
 * @Description: 
 * @Author: chenjz
 * @Date: 2022-08-04 16:00:17
 * @LastEditors: chenjz
 * @LastEditTime: 2022-08-04 17:02:36
 */
export const notice = [
    {
        id: 1,
        name: '钣金款交流桩',
        noticeShow: false,
        list: {
            '功率': {
                value: '',
                // options: ['7kW单枪', '14kW双枪' ],
                change: function () {
                    console.log('before:', JSON.stringify(notice));
                    notice[0].list['安装方式'].options[0].show = true
                    console.log('after:', JSON.stringify(notice));
                },
                options: [
                    {
                        value: '0', name: '7kW单枪',
                        show: false
                    },
                    {
                        value: '1', name: '14kW双枪',
                        show: false
                    },
                ],
                required: true,
            },
            '安装方式': {
                value: '',
                // options: ['壁挂式','立柱式' ],
                options: [
                    { value: '0', name: '壁挂式', show: false },
                    { value: '1', name: '立柱式', show: false },
                ],
                required: true,
            }
        }
    }
]
