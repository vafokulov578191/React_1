import React from 'react'
import './main.css'

function Main() {
  return (
    <main className='main'>
        <div className="item">
            <div className="item_top">
                <img src="https://img3.akspic.ru/previews/2/4/5/8/3/138542/138542-nebo-melkij_dozhd-sneg-noch-dozhd-550x310.jpg" alt="" />
            </div>
            <div className="item_bottom">
                <div className="item_title">
                    <span>Technology and remote work: A- blessing or a curse?</span>
                </div>
                <div className="item_user">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6cp0HZyikUGNZj0oi6Zgr02LrvB1L5IXcQ&usqp=CAU" alt="" />
                    <div className="inf_user">
                        <div className="inf_user_name">
                            <span>Jude</span>
                            <span>Sampson</span>
                            <span>Jr.</span>
                        </div>
                        <div className="inf_user_job">
                            <span>Software developer</span>
                        </div>
                    </div>
                </div>
                <div className="item_time">
                    <img src="https://cdn5.vectorstock.com/i/1000x1000/76/94/clock-icon-time-symbol-vector-22537694.jpg" alt="" />
                    <span>3 minute read</span>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main