import EduType from '../components/Admin/Upload/EduType';
import Files from '../components/Admin/Upload/Files';
import Details from '../components/Admin/Upload/Details';
import FormDetails from '../components/Admin/Upload/FormDetails';
import MediaDetails from '../components/Admin/Upload/MediaDetails';
import Settings from '../components/Admin/Upload/Settings';
import getFilesFormats from './getFilesFormats';
import eduTypesTitles from '../constants/eduTypes';
import gameIcon from '../assets/media/Upload/game.png';
import stockIcon from '../assets/media/Icons/stock.png';
import albumIcon from '../assets/media/Icons/album.png';

const getUploadStages = (pageType, itemDetails, nextStage) => {
  switch (true) {
    case pageType === 'תוצרים':
      return [
        {
          title: 'סוג מוצר',
          component: (
            <EduType
              nextStage={nextStage}
              eduTypesTitles={[
                ...eduTypesTitles,
                { text: 'משחק', img: gameIcon },
              ]}
              numberOfItemsInLine={3}
            />
          ),
        },
        {
          title: 'קבצים',
          component: (
            <Files
              nextStage={nextStage}
              fileTypes={getFilesFormats(itemDetails?.type)}
              hasCover={itemDetails?.type !== 'סיכום'}
            />
          ),
        },
        { title: 'פרטים', component: <Details nextStage={nextStage} /> },
        {
          title: 'הגדרות',
          component: <Settings nextStage={nextStage} />,
        },
      ];
    case pageType === 'טפסים':
      return [
        {
          title: 'קבצים',
          component: (
            <Files nextStage={nextStage} fileTypes={['PDF']} hasCover={false} />
          ),
        },
        { title: 'פרטים', component: <FormDetails nextStage={nextStage} /> },
      ];
    case pageType === 'תמונת סטוק / אלבום':
      return [
        {
          title: 'סוג מוצר',
          component: (
            <EduType
              nextStage={nextStage}
              eduTypesTitles={[
                { text: 'אלבום', img: albumIcon },
                { text: 'תמונות סטוק', img: stockIcon },
              ]}
              numberOfItemsInLine={2}
            />
          ),
        },
        {
          title: 'קבצים',
          component: (
            <Files
              nextStage={nextStage}
              fileTypes={['PNG', 'JPG']}
              hasCover={false}
            />
          ),
        },
        { title: 'פרטים', component: <MediaDetails nextStage={nextStage} /> },
      ];
    default:
      return [
        {
          title: 'סוג מוצר',
          component: (
            <EduType
              nextStage={nextStage}
              eduTypesTitles={[
                ...eduTypesTitles,
                { text: 'משחק', img: gameIcon },
              ]}
              numberOfItemsInLine={3}
            />
          ),
        },
        {
          title: 'קבצים',
          component: (
            <Files
              nextStage={nextStage}
              fileTypes={getFilesFormats(itemDetails?.type)}
              hasCover={itemDetails?.type !== 'סיכום'}
            />
          ),
        },
        { title: 'פרטים', component: <Details nextStage={nextStage} /> },
        {
          title: 'הגדרות',
          component: <Settings nextStage={nextStage} />,
        },
      ];
  }
};

export default getUploadStages;
