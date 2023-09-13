import React from 'react'
import './reviews.css'
import userimage from './image/Screenshot (184).png'
import StarRateIcon from '@mui/icons-material/StarRate';

function Reviews() {
  return (
    <div>
       <div style={{display:"flex",justifyContent:"center"}}>
        <h1>Pepole reveiew shee</h1>
       </div>
      <div className='reviews'>
        <div className='reviews-1'>
            <img src={userimage} alt="" />
            <div className='reviews-2'>
                <span>Akash Chouhan</span>
                <p>consectetur adipisicing elit. Maxime non quisquam dolorem. Veritatis, iure accusantium consequuntur velit totam, consectetur debitis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatibus rem omnis dignissimos asperiores recusandae explicabo culpa incidunt autem quam dolorum, hic optio veniam aperiam cumque odit libero quis possimus! soluta sapiente ut quasi tempore molestias amet quod magnam. Enim. consectetur adipisicing elit. Repellat eius quae id molestias tempore ipsam, a alias, commodi sint saepe fuga quisquam sequi et ex labore quaerat optio ipsum ratione?</p>
                <StarRateIcon style={{marginTop:"10px",color:'yellow'}}></StarRateIcon>
                <StarRateIcon style={{marginTop:"10px"}}></StarRateIcon>
                <StarRateIcon style={{marginTop:"10px"}}></StarRateIcon>
                <StarRateIcon style={{marginTop:"10px"}}></StarRateIcon>
            </div>
        </div>
        <div className='reviews-1'>
            <img src={userimage} alt="" />
            <div className=' reviews-2'>
                <span>Akash Chouhan</span>
                <p>ectetur adipisicing elit. Repellat eius quae id molestias tempore ipsam, a alias, commodi sint saepe Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minima vero ea velit corporis aperiam dolorum quisquam debitis soluta sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum facere dolore blanditiis beatae impedit sit libero tempore? Aspernatur ut dolore excepturi eum facilis perferendis quod sit sint reiciendis minima? exercitationem qui dolor, deleniti vitae ut aut distinctio assumenda veritatis. fuga quisquam sequi et ex labore quaerat optio ipsum ratione?</p>
                <StarRateIcon style={{marginTop:"10px",color:'yellow'}}></StarRateIcon>
                <StarRateIcon style={{marginTop:"10px"}}></StarRateIcon>
                <StarRateIcon style={{marginTop:"10px"}}></StarRateIcon>
                <StarRateIcon style={{marginTop:"10px"}}></StarRateIcon>
            </div>
        </div>
        <div className='reviews-1'>
            <img src={userimage} alt="" />
            <div className=' reviews-2'>
                <span>Akash Chouhan</span>
                <p> consectetur adipisicing elit. Dicta provident iusto minus rem natus ut sit repellendus qui similique quae dolores vitae voluptate, unde eos consectetur et consequuntur, quia dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat eius quae id molestias tempore ipsam, a alias, commodi sint saepe fuga quisquam sequi et ex labore quaerat optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deleniti ipsa laudantium doloremque adipisci, delectus sint, quos exercitationem inventore fugiat expedita debitis quibusdam nisi? Hic qui vel illum magnam iste. ipsum ratione?</p>
                <StarRateIcon style={{marginTop:"10px",color:'yellow'}}></StarRateIcon>
                <StarRateIcon style={{marginTop:"10px",color:'yellow'}}></StarRateIcon>
                <StarRateIcon style={{marginTop:"10px"}}></StarRateIcon>
                <StarRateIcon style={{marginTop:"10px"}}></StarRateIcon>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
