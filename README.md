|  | Pemrograman Berbasis Framework 2024 |
| ----------- | --------- |
| NIM | 2141720266 |
| Nama | Alfan Marcel Mulyawan |
| Kelas | TI-3A |

Praktikum 1
membuat sebuah folder bernama profile dan di dalam folder tersebut terdapat file bernama page.tsx. Penamaan folder disini akan berpengaruh pada url yang akan diakses pada routing.

    export default function Profiles() {
        return(
            <h1>
                Nama : Alfan Marcel Mulyawan
                <br />
                NIM : 2141720266
                <br />
                TTL : Sidoarjo, 28-08-2003
            </h1>
        )
    }
![round](assets/01.png)

Praktikum 2
isi page.tsx pada second blog

    export default function SecondBlog() {
        return (
            <h1>Second Blog</h1>
        );
    } 
Output

![round](assets/02.png)
 - Apa kekurangan yang mungkin terjadi jika menggunakan pendekatan pada Praktikum 2 untuk menangani routing?

* Nested routing dapat membuat kode menjadi lebih kompleks, terutama jika terdapat beberapa tingkat kedalaman nesting. Hal ini dapat membuat sulit untuk memahami aliran navigasi dalam aplikasi.

Praktikum 3
