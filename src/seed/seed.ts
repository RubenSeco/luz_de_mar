interface SeedProduct {
  id: string;
  description: string;
  image: string;
  category: "bracelet" | "necklace" | "earring" | "key_chain" | "set";
  slug: string;
  title: string;
  isSet?: boolean;
}

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {

  products: [
    {
      "id": "543902e6-2f6a-4d6b-a33f-e8c7ce18dd82",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129393/pkm9iguubldsrjatqtmu.jpg",
      "category": "bracelet",
      "slug": "pulseras-1",
      "title": "Pulseras 1"
    },
    {
      "id": "3928744b-926e-4a23-a737-83d709200073",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129443/x9p9n2jgmq3iyvji0jyw.jpg",
      "category": "necklace",
      "slug": "collares-2",
      "title": "Collares 2"
    },
    {
      "id": "e95993d2-4eb5-40c7-b03c-fe6e773ac02f",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129480/sbwnxdz08fse1vmhyrqf.jpg",
      "category": "bracelet",
      "slug": "pulseras-2",
      "title": "Pulseras 2"
    },
    {
      "id": "9d0a47d1-d904-41ed-b574-ec805294d11f",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129534/jxcxb6e7kjziyognavgx.jpg",
      "category": "necklace",
      "slug": "pulseras-3",
      "title": "Pulseras 3"
    },
    {
      "id": "fc345556-88d8-491c-b7df-88fba76ccc84",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129578/zt2kibu6px2ca8zuftp3.jpg",
      "category": "necklace",
      "slug": "collares-3",
      "title": "Collares 3"
    },
    {
      "id": "57720ef2-d589-4026-b7b1-9e33308f27e1",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129649/nrpskj1pwufv3soeg1ko.jpg",
      "category": "earring",
      "slug": "aros-1",
      "title": "Aros 1"
    },
    {
      "id": "b21b810d-c5f3-4559-8620-89b58818e614",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129685/v3mffsq80ideu6yjf08k.jpg",
      "category": "necklace",
      "slug": "collares-4",
      "title": "Collares 4"
    },
    {
      "id": "54bcbcf4-c411-4236-af43-ee68998d9056",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129738/ix8cej05gnnufdempgwx.jpg",
      "category": "earring",
      "slug": "aros-2",
      "title": "Aros 2"
    },
    {
      "id": "15aff7ce-2a6d-4594-9eb2-ffd288b9d8e0",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129806/cqiu032ovozxhmlqi2am.jpg",
      "category": "necklace",
      "slug": "collares-5",
      "title": "Collares 5"
    },
    {
      "id": "25c9f78a-4230-482d-bb57-cf3a86d39c56",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129276/weacklq1zhuzlmwz4sfv.jpg",
      "category": "necklace",
      "slug": "collar-1",
      "title": "Collares 1"
    },
    {
      "id": "ba0d10da-b28b-42eb-b692-ddf2f115d9ef",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129840/eatqruzl9u0cpn3wmzpd.jpg",
      "category": "earring",
      "slug": "aros-3",
      "title": "Aros 3"
    },
    {
      "id": "c87e350c-bbd4-47ec-822a-38763d1354ac",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129894/ex73wyie3wjb6w1opjtx.jpg",
      "category": "bracelet",
      "slug": "pulseras-4",
      "title": "Pulseras 4"
    },
    {
      "id": "199580d7-7a8b-4d19-b7a5-802557e9fcce",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129936/ildxngqy3v2tnuo4cn4g.jpg",
      "category": "necklace",
      "slug": "collares-6",
      "title": "Collares 6"
    },
    {
      "id": "2d72c7b9-f96a-460c-b3fe-921b78308760",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744129971/noqnkdwduijzd1ynh30w.jpg",
      "category": "necklace",
      "slug": "collares-7",
      "title": "Collares 7"
    },
    {
      "id": "a8a36239-49fd-4630-8e01-222dfd7701f5",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130024/hveboqkhclyyzgnqxl6g.jpg",
      "category": "necklace",
      "slug": "collares-8",
      "title": "Collares 8"
    },
    {
      "id": "9b858891-8aa9-4ba6-a2a2-ae7b4707b979",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130061/cwfmq2sfcznm9np3w4ra.jpg",
      "category": "earring",
      "slug": "aros-4",
      "title": "Aros 4"
    },
    {
      "id": "a3b182a7-1f4d-434e-8721-b4247c854bdb",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130088/os0oahblqxitqxowvzig.jpg",
      "category": "necklace",
      "slug": "aros-5",
      "title": "Aros 5"
    },
    {
      "id": "03c2c99f-564a-4a7e-a7b6-2dd6f1d4b7ab",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130128/wknnaqokqm1man2z2pzg.jpg",
      "category": "bracelet",
      "slug": "pulseras-5",
      "title": "Pulseras 5"
    },
    {
      "id": "5b544c94-4cfb-40e1-ab56-c2e946ba7ae0",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130178/a82eqdyiharsr23tlncx.jpg",
      "category": "necklace",
      "slug": "collares-9",
      "title": "Collares 9"
    },
    {
      "id": "0214f4ac-f35c-4b67-a853-47ad8c2cb6cb",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130221/qpgysudtjizfd36avlad.jpg",
      "category": "earring",
      "slug": "aros-6",
      "title": "Aros 6"
    },
    {
      "id": "a33153d9-e05c-428e-9c72-6cdd397f85df",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130265/u6sjbdaimf3no0euaivr.jpg",
      "category": "key_chain",
      "slug": "llaveros-1",
      "title": "Llaveros 1"
    },
    {
      "id": "1cf4c72b-9b5c-4b4a-9ca2-c1400fe89a56",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130291/ckudax8x4wsgqkndoyxw.jpg",
      "category": "key_chain",
      "slug": "llaveros-2",
      "title": "Llaveros 2"
    },
    {
      "id": "f97ead09-d56d-4e4f-b535-60926506bcad",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130325/kegaasdbttog1nthjklc.jpg",
      "category": "bracelet",
      "slug": "pulseras-6",
      "title": "Pulseras 6"
    },
    {
      "id": "495af8a7-5e6a-40f4-9e06-50897683783d",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130355/sqytqmxkvhniwpr8dxc5.jpg",
      "category": "bracelet",
      "slug": "pulseras-7",
      "title": "Pulseras 7"
    },
    {
      "id": "3123d218-7ca8-4a41-9704-86bb78e9a7e5",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130400/snzngrezurwkxejyvs08.jpg",
      "category": "bracelet",
      "slug": "pulseras-8",
      "title": "Pulseras 8"
    },
    {
      "id": "3ef8aa6d-fe6b-44bd-9e69-ce30edf83948",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130447/vhqrrsttke0ad30ocd3h.jpg",
      "category": "bracelet",
      "slug": "pulseras-9",
      "title": "Pulseras 9"
    },
    {
      "id": "d118755e-91ea-4d57-aad0-dffd287911ca",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130484/gtrz0yupcouryxm5zxay.jpg",
      "category": "bracelet",
      "slug": "pulseras-10",
      "title": "Pulseras 10"
    },
    {
      "id": "3aac2545-ca36-4df8-8632-e7914bd1f0e1",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130521/rpcguzq0nlsbdgedjhgp.jpg",
      "category": "necklace",
      "slug": "collares-10",
      "title": "Collares 10"
    },
    {
      "id": "b100360a-4ed0-4b0f-ac56-148b0e94c543",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130626/jvlac6etagdv19pbnvzn.jpg",
      "category": "necklace",
      "slug": "collares-11",
      "title": "Collares 11"
    },
    {
      "id": "53c73389-1632-4c87-8583-64bf874db9e4",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130661/hzea6mfd8p0vkoqmxjti.jpg",
      "category": "bracelet",
      "slug": "pulseras-11",
      "title": "Pulseras 11"
    },
    {
      "id": "156f8aca-f85b-4fae-b744-afaef80c2fbb",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130720/fkicudxofhzfdkufnlts.jpg",
      "category": "bracelet",
      "slug": "pulseras-12",
      "title": "Pulseras 12"
    },
    {
      "id": "d61e145c-fe72-4945-be00-24ca2a823174",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130749/wdvlxhhf2q4bscmgqj6v.jpg",
      "category": "necklace",
      "slug": "collares-12",
      "title": "Collares 12"
    },
    {
      "id": "0045f43d-4872-4725-b264-1ceaec7bb0fc",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130778/lo4y3yi6ofoywjbgwfdk.jpg",
      "category": "earring",
      "slug": "aros-7",
      "title": "Aros 7"
    },
    {
      "id": "3191fa34-7eb2-43fa-9ca1-7cbb53d15339",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130831/nesbahsxcl7g28qpddw1.jpg",
      "category": "key_chain",
      "slug": "llaveros-3",
      "title": "Llaveros 3"
    },
    {
      "id": "9657f499-c9f5-4a69-bb36-a1fa4fd2ae53",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130881/mgpcyz9waaee6x8ulahh.jpg",
      "category": "bracelet",
      "slug": "pulseras-13",
      "title": "Pulseras 13"
    },
    {
      "id": "039a2925-8305-4275-9ad6-83b95c3927ad",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130930/s2ntp6lvybtovnimgsij.jpg",
      "category": "key_chain",
      "slug": "llaveros-4",
      "title": "Llaveros 4"
    },
    {
      "id": "28386a7e-06e6-4be4-b95b-2b20e57efa5c",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744130961/mmtvhiezmhdadvtzmilg.jpg",
      "category": "key_chain",
      "slug": "llaveros-5",
      "title": "Llaveros 5"
    },
    {
      "id": "d1569e3d-1f6b-40d1-b945-b5189ad0c1fe",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744131015/gaxdzoivkpw0f6ptnbor.jpg",
      "category": "key_chain",
      "slug": "llaveros-6",
      "title": "Llaveros 6"
    },
    {
      "id": "42344d20-af39-4acd-8b50-a8fd19374ba8",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744131076/esizllygfu2tf8sh28kn.jpg",
      "category": "key_chain",
      "slug": "llaveros-7",
      "title": "Llaveros 7"
    },
    {
      "id": "0abad4c7-4517-48e9-88af-7788fb3e4944",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744131119/mxxm0cfhx87svwgaan4m.jpg",
      "category": "earring",
      "slug": "aros-8",
      "title": "Aros 8"
    },
    {
      "id": "2f6f4425-ae77-4fa1-9194-928d48d8ca25",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744131186/nt6l80qj7rqmeddlqc0j.jpg",
      "category": "necklace",
      "slug": "collares-13",
      "title": "Collares 13"
    },
    {
      "id": "e61cfa22-e634-4d9b-b18f-aece90cb6b8d",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744131298/x50xljcrhajnwzoxoucg.jpg",
      "category": "necklace",
      "slug": "collares-14",
      "title": "Collares 14"
    },
    {
      "id": "9dd562d2-e785-4cbe-9c0b-e700a3cd08c8",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744131350/lzx0ro7dm1pn0kltq2e0.jpg",
      "category": "key_chain",
      "slug": "llaveros-8",
      "title": "Llaveros 8"
    },
    {
      "id": "414c7cd1-5242-4fc1-a875-181a23c1fba3",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744131399/d7uwlkiy3vat3ewqoj76.jpg",
      "category": "necklace",
      "slug": "collares-15",
      "title": "Collares 15"
    },
    {
      "id": "e2c31378-1e73-4b6d-8ee7-8344e95b7be4",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744131463/e1gtzhdynwut0zpjwmsc.jpg",
      "category": "earring",
      "slug": "aros-9",
      "title": "Aros 9"
    },
    {
      "id": "d381904f-a79c-4e16-bde5-44e444d12494",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744131582/hzzciyhulbfdpytzzvz9.jpg",
      "category": "bracelet",
      "slug": "pulseras-14",
      "title": "Pulseras 14"
    },
    {
      "id": "0eed1d74-8e68-4eb7-bd28-d4f1c7a22ee5",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744131732/aspeyqub8juvqczxjkw9.jpg",
      "category": "bracelet",
      "slug": "pulseras-15",
      "title": "Pulseras 15"
    },
    {
      "id": "8e0968e5-394b-4479-8d9b-ef1a3bea0485",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744131920/bvzqkhkznob3rn0l45md.jpg",
      "category": "necklace",
      "slug": "collares-16",
      "title": "Collares 16"
    },
    {
      "id": "15e6b683-36ad-4427-a969-165cc0e724a3",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744131978/pedusq8r4fx3nql30ctu.jpg",
      "category": "necklace",
      "slug": "collares-17",
      "title": "Collares 17"
    },
    {
      "id": "b55e3e20-3226-48e4-abd5-286301a8e547",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132037/kyt3xys5vcuntvwwkx62.jpg",
      "category": "necklace",
      "slug": "collares-18",
      "title": "Collares 18"
    },
    {
      "id": "3d69612d-72c3-4346-aa28-a108a3bd5a23",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132073/hliv6wd9omiaes1cik6v.jpg",
      "category": "necklace",
      "slug": "collares-19",
      "title": "Collares 19"
    },
    {
      "id": "23a10f73-3367-4dc7-9c3e-d8224606633c",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132116/lmnlxiqh1zqymqtvr9w5.jpg",
      "category": "necklace",
      "slug": "collares-20",
      "title": "Collares 20"
    },
    {
      "id": "66c7ad5f-d60c-4d99-8b50-56bf07b1e996",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132170/scmfjobjkv0gpm2by8g9.jpg",
      "category": "bracelet",
      "slug": "pulseras-16",
      "title": "Pulseras 16"
    },
    {
      "id": "dde228c7-67cb-41b5-bd94-ef6ea178da82",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132223/solza3d8ykyhzehqijk7.jpg",
      "category": "bracelet",
      "slug": "pulseras-17",
      "title": "Pulseras 17"
    },
    {
      "id": "02c81363-8b5a-4c6d-8e29-6832427d05c3",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132262/fwmvzwsxn5ygs1qfkvhl.jpg",
      "category": "bracelet",
      "slug": "pulseras-18",
      "title": "Pulseras 18"
    },
    {
      "id": "e5c32a7e-2e89-4030-81bf-92501d71edb9",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132306/burgxfl6n5flhvauqiqp.jpg",
      "category": "bracelet",
      "slug": "pulseras-19",
      "title": "Pulseras 19"
    },
    {
      "id": "fa5cee71-f70c-48c5-808d-72f91ddde1f1",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132414/ovcerw4z5ynefhf1tnsm.jpg",
      "category": "bracelet",
      "slug": "pulseras-20",
      "title": "Pulseras 20"
    },
    {
      "id": "fc533c00-0127-4025-b209-67f25c7c5956",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132461/vmpzd3l0r34cqpdbdnvl.jpg",
      "category": "earring",
      "slug": "aros-10",
      "title": "Aros 10"
    },
    {
      "id": "951de416-e446-4f79-94c6-167b562899a3",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132493/ryvdhkp4w9m5lphwkzut.jpg",
      "category": "earring",
      "slug": "aros-11",
      "title": "Aros 11"
    },
    {
      "id": "86fbf735-e310-4065-9f67-138de39cd394",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132532/vyjbfxvag5uhrg7zv9rx.jpg",
      "category": "earring",
      "slug": "aros-12",
      "title": "Aros 12"
    },
    {
      "id": "b94b3271-aff9-4048-8177-dc53dc3251fa",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132618/jdq3punl5ykd0w9byofv.jpg",
      "category": "earring",
      "slug": "aros-13",
      "title": "Aros 13"
    },
    {
      "id": "46559d07-942b-4b90-97c8-53e8b8c72e74",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132847/demwluzhqldqzt2tnxkd.jpg",
      "category": "key_chain",
      "slug": "llaveros-9",
      "title": "Llaveros 9"
    },
    {
      "id": "62167a5f-cafb-4081-b6c0-7c4b8a12b485",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132901/nymhjtnhxo2vhibv1bdi.jpg",
      "category": "key_chain",
      "slug": "llaveros-10",
      "title": "Llaveros 10"
    },
    {
      "id": "9d081473-36c0-496d-b70a-186a28d214f9",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744132960/ikgxqhnqw83feak6jgwk.jpg",
      "category": "key_chain",
      "slug": "llaveros-11",
      "title": "Llaveros 11"
    },
    {
      "id": "78cba74c-0bf2-4173-9cf2-2f802ebe3b2f",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744133158/l1gu13q6afene0qrlihj.jpg",
      "category": "set",
      "slug": "conjuntos-1",
      "title": "Conjuntos 1"
    },
    {
      "id": "c861e3cd-dc44-4dad-8f39-b084badef4b7",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744133191/otyhstpdwveyxflco5rk.jpg",
      "category": "set",
      "slug": "conjuntos-2",
      "title": "Conjuntos 2"
    },
    {
      "id": "7cf266df-adee-4e1b-8e44-3633faf958eb",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744133222/dvhimz5scydxbqy91tui.jpg",
      "category": "set",
      "slug": "conjuntos-3",
      "title": "Conjuntos 3"
    },
    {
      "id": "574aa86c-9b20-4ef0-951b-431964a1904f",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744133264/qbengh2unc17mi4rdqo9.jpg",
      "category": "set",
      "slug": "conjuntos-4",
      "title": "Conjuntos 4"
    },
    {
      "id": "e7fcb803-770b-4497-9330-ad00709db942",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744133292/lceluaiii8ukv4cimnfm.jpg",
      "category": "set",
      "slug": "conjuntos-5",
      "title": "Conjuntos 5"
    },
    {
      "id": "62e06bf9-2b6e-4fc8-8906-f7c1bee898f8",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744133328/pfiuqdfk1vmcx1pvryno.jpg",
      "category": "set",
      "slug": "conjuntos-6",
      "title": "Conjuntos 6"
    },
    {
      "id": "9694e6d0-53a4-4046-8eb3-525fa6a8eeaf",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744133359/wejfyn7t71amscxpcgbc.jpg",
      "category": "set",
      "slug": "conjuntos-7",
      "title": "Conjuntos 7"
    },
    {
      "id": "dc7f1c91-bfa8-46d5-adae-2852e6ff0111",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744133383/emkp6isuk83omvt49mc5.jpg",
      "category": "set",
      "slug": "conjuntos-8",
      "title": "Conjuntos 8"
    },
    {
      "id": "85071c93-a901-4958-a1b3-4ecc7386cc26",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744133413/tzidazrst0cobhzwc5dq.jpg",
      "category": "set",
      "slug": "conjuntos-9",
      "title": "Conjuntos 9"
    },
    {
      "id": "9cd664fe-2950-47d8-ae4d-48bdf03b2d52",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744133483/wdpctsdcguwbeq7dvnjl.jpg",
      "category": "set",
      "slug": "conjuntos-10",
      "title": "Conjuntos 10"
    },
    {
      "id": "bc57c275-c829-4d36-8797-57efcac1a5cc",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744133513/geolt5rtj4qvh17uqti3.jpg",
      "category": "set",
      "slug": "conjuntos-11",
      "title": "Conjuntos 11"
    },
    {
      "id": "b6bb348d-ccc2-4f63-97f4-96db7edece85",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi aspernatur est, repellat non qui?",
      "image": "https://res.cloudinary.com/dqmr8bgui/image/upload/v1744133568/lftdhi86ofqmpkzfhfsy.jpg",
      "category": "set",
      "slug": "conjuntos-12",
      "title": "Conjuntos 12"
    }
  ]
};
