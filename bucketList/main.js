new Vue({
    el: '#app',
    components: {
      'listElement': {
        template: '#listElement',
        props: {
          img: {
            type: String,
            required: true
          },
          title: {
            type: String,
            required: true
          },
          description: {
            type: String,
            required: true
          }
        }
      }
    },
    data: {
      bucketList: [{
          id: 1,
          img: 'https://www.gezgincift.com/wp-content/uploads/2018/11/BAL%C4%B0-ADASINDA-EN-%C4%B0Y%C4%B0-%C4%B0NSTAGRAM-FOTO%C4%9ERAF-YERLER%C4%B0-4-500x610.jpg',
          title: 'Bali',
          description: 'Bali Endonezya\'nın turistik adalarından en önemlisi. Mesafe uzaklığı nedeniyle uçak bileti fiyatı biraz pahalı olsa da önceden kampanyaları takip ederek alırsanız daha hesaplı fiyata gidebilirseniz. Bir kere gittikten sonrası ise daha kolay.'
        },
        {
          id: 2,
          img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg',
          title: 'Tokyo',
          description: 'Dünyanın en farklı coğrafyalarından biri olan Japonya\'nın başkenti Tokyo, canlı ve dinamik yapısıyla dünyanın en önemli şehirlerindendir. 35 milyonun üzerindeki nüfusuyla dünyanın en kalabalık metropol kentidir.'
        },
        {
          id: 3,
          img: 'https://cache-graphicslib.viator.com/graphicslib/thumbs674x446/2230/SITours/sydney-tour-with-optional-sydney-harbour-lunch-cruise-in-sydney-115286.jpg',
          title: 'Sydney',
          description: 'Avustralya\'nın en popüler şehri Sidney, ikonlaşmış dünyaca ünlü yapıları, dünyanın farklı yerlerinden aldığı göçle birlikte oluşmuş kozmopolit atmosferi ile modern şehir hayatının nasıl keyfili olabileceğinin en güzel örneklerinden birisi.'
        },
        {
          id: 4,
          img: 'https://thumbs.dreamstime.com/b/march%C3%A9s-de-marrakech-la-m%C3%A9dina-71302509.jpg',
          title: 'Marakeş',
          description: 'Marakeş, Fas\'ın orta kısmında bulunan ve ülkenin ilk başkenti olma özelliğini taşıyan bir şehir. Atlas Dağları\'nın dibindeki kent, Atlantik ile Fas arasında bir geçiş noktası oluşturuyor.'
        }
      ]
    }
  })
  