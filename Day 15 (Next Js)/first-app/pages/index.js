import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    {/* ini jika menggunakan local storage */}
    <div>
      <p>ini jika menggunakan local storage</p>
      <Image 
      src={require('./../public/solar.png')}
      alt='cartoon'
      width='300'
      height='300'
      />
    </div>

    {/* ini direct menggunakan http atau server lain menggunakan loader tidak dikompres dan tidak didaftarkan */}
    <div>
        <p>ini direct menggunakan http atau server lain menggunakan loader tidak dikompres dan tidak didaftarkan</p> 
        <Image 
          loader={() => 'https://resizing.flixster.com/czUh7T7EuyZWx-KokX6CTPMsaw0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vODk1MWM2MDktZDFkZC00ZjZkLWJiMDMtMjgwZTExNzhjMzQwLmpwZw==' }
          src='solar'
          alt='cartoon'
          width={'300'}
          height={'300'}
        />
    </div>

    {/* ini menggunaka server lain dan dikompres, namun daftarkan dulu pada next.js.config */}
    <div>
      <p>ini menggunaka server lain dan dikompres, namun daftarkan dulu pada next.js.config</p>
      <Image 
      src={'https://resizing.flixster.com/czUh7T7EuyZWx-KokX6CTPMsaw0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vODk1MWM2MDktZDFkZC00ZjZkLWJiMDMtMjgwZTExNzhjMzQwLmpwZw==' }
      alt='cartoon'
      width={'300'}
      height={'300'}
      />
    </div>

    </>
  )
}
