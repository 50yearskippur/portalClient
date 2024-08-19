import './AdminSubsubjectsManagment.css';
import OrderBy from '../components/OrderBy/OrderBy';
import downloadIcon from '../assets/media/Icons/squereDownload.svg';
import selecteddownloadIcon from '../assets/media/Icons/blueDownloadIcon.svg';
import bigA from '../assets/media/Icons/bigA.svg'
import selectedbigA from '../assets/media/Icons/blueBigA.svg'
import Search from '../components/Search/Search';


const AdminSubsubjectsManagment = () => {
    return (
        <div className="page-container">
        <div className="admin-header-container">
          <div className="header">ניהול תתי נושאים</div>
        </div>
        <div className="admin-container">
            <div className='admin-top-approved'>
        <OrderBy
              options={[
                {
                  value: 'upload-date',
                  label: 'תאריך העלאה',
                  icon: downloadIcon,
                  selectedicon: selecteddownloadIcon,
                },
                {
                  value: 'alphabet',
                  label: " 'א' - ב",
                  icon: bigA,
                  selectedicon: selectedbigA,
                },
              ]}
            />
             <Search
              placeholder={'חיפוש חופשי'}
              style={{ height: '42px', width: '16.7vw' }}
            />
            </div>
            </div>
            
        </div>
        

    )

}

export default AdminSubsubjectsManagment;
