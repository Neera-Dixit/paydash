'use strict';

module.exports = {
    $meta: 'English translation file',
    navigation: {
        overview: {
            $filter: 'role',
            district: 'ज़िला प्रदर्शन',
            block: 'प्रखंड/जनपद प्रदर्शन',
            $default: 'अवलोकन प्रदर्शन'
        },
        discrete: {
            $filter: 'role',
            district: 'प्रखंड/जनपद प्रदर्शन',
            block: 'पंचायत प्रदर्शन',
            $default: 'अलहदा प्रदर्शन'
        }
    },
    messages: {
        loading: 'डेटा लोड हो रहा है...',
        not_found: 'पृष्ठ नहीं मिला। Paydash टीम से संपर्क करें.'
    },
    payment_steps: {
        '1': 'मस्टर रोल बंद से डाटा एंट्री का समय',
        '2': 'डाटा एंट्री से वेज लिस्ट बनाने का समय',
        '3': 'वेज लिस्ट बनाने से वेज लिस्ट भेजने का समय',
        '4': 'वेज लिस्ट भेजने से FTO बनाने का समय',
        '5': 'FTO बनाने से पहले हस्ताक्षर का समय',
        '6': 'पहले हस्ताक्षर से दूसरे हस्ताक्षर का समय',
        '7': 'दूसरे हस्ताक्षर से बैंक की कारवाई के समापन का समय'
    },
    performance: {
        overview: {
            chart_a: {
                title: {
                    $filter: 'role',
                    district: 'आपके ज़िले का प्रदर्शन',
                    block: 'आपके प्रखंड/जनपद का प्रदर्शन',
                    $default: 'अवलोकन प्रदर्शन'
                },
                description: {
                    $filter: 'role',
                    district: 'आपके ज़िले में मज़दूरी भुगतान के हर एक पड़ाव पर लगे औसत दिन',
                    block: 'आपके प्रखंड/जनपद में मज़दूरी भुगतान के हर एक पड़ाव पर लगे औसत दिन',
                    $default: 'आपके क्षेत्रों में मज़दूरी भुगतान के हर एक पड़ाव पर लगे औसत दिन'
                }
            },
            chart_b: {
                title: {
                    $filter: 'role',
                    district: 'आपके प्रदर्शन की तुलना',
                    block: 'आपके प्रदर्शन की तुलना',
                    $default: 'आपके प्रदर्शन की तुलना'
                },
                description: {
                    $filter: 'role',
                    district: 'अपने ज़िले के औसत प्रदर्शन की तुलना राज्य के औसत प्रदर्शन से करें',
                    block: 'अपने प्रखंड/जनपद के औसत प्रदर्शन की तुलना ज़िले और राज्य के औसत प्रदर्शन से करें ',
                    $default: 'अपने प्रखंड/जनपद के औसत प्रदर्शन की तुलना अन्य क्षेत्रों के औसत प्रदर्शन से करें'
                }
            },
            tooltip: 'यह ग्राफ़ MGNREGA मज़दूरी भुगतान में लगा औसत समय दिखाता है| वर्णित तिथियों पर हुए भुगतान में लगे समय को 7 पड़ावों में बाटा गया है| इसलिए, केवल पूरे हुए भुगतान का डाटा दिखाया जा रहा है|',
        },
        discrete:{
            sub_heading:  'आपकी पंचायतों का प्रदर्शन',
            subtitle: {
                $filter: 'role',
                block: 'आपकी पंचायतों में मज़दूरी भुगतान की प्रक्रिया के हर एक पड़ाव में लगा औसत समय',
                district: 'The performance of your blocks on average days to complete each step of the payment process.',
                $default :'अपने क्षेत्रों में मज़दूरी भुगतान की प्रक्रिया के हर एक पड़ाव में लगा औसत समय'
            },
            tooltip: 'The charts below show the average number of days to complete each step of the payment process for payments that reached beneficiaries’ bank accounts on the given date. Therefore, only completed payments are displayed. Your worst performing panchayats are shown first.',
            ta_message: 'आपके प्रखंड/जनपद में कुछ TAs/SEs/JEs और उनकी पंचायतों के नाम MGNREGA वेबसाइट पर अपडेट नहीं किए गये हैं| इस के परिणाम स्वरूप, हम आपको आपके प्रखंड/जनपद के सभी TAs/SEs/JEs  के प्रदर्शन की जानकारी नहीं दे सकते| यह जानकारी पाने के लिए कृपया nrega.nic.in पर सभी TAs/SEs/JEs  और उनकी पंचायतों के नाम भरें|',
            grs_message: 'आपके प्रखंड/जनपद में कुछ GRSs और उनकी पंचायतों के नाम MGNREGA वेबसाइट पर अपडेट नहीं किए गये हैं| इस के परिणाम स्वरूप, हम आपको आपके प्रखंड/जनपद के सभी GRSs के प्रदर्शन की ',
            grouping_selectors: {
                no: 'बिना कोई वर्गीकरण',
                ta:'वर्ग: उप यंत्री',
                grs: 'वर्ग: GRS'
            }
        }
    }
};
