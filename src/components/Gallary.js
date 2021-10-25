import scott from '../images/scott-600.png';

function Gallary() {
  return (
    <div className='gallary-container'>
      <div className='gallary-header'>
        <h1>Gallary</h1>
        <div className='gallary-items'>
          <div className='gallary-item'>
            <img src={scott} alt='' />
          </div>
          <div className='gallary-item'>
            <img src={scott} alt='' />
          </div>
          <div className='gallary-item last-img'>
            <img src={scott} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallary;