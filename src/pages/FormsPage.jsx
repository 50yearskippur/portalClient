import React from 'react';
import './FormsPage.css';
import PdfPreview from '../components/ItemsComponents/PdfPreview';
import Search from '../components/Search/Search';
import SortBySubject from '../components/SortBySubject/SortBySubject';
import { forms } from '../constants/forms';

const FormPage = () => {
  const getCommonForms = () => {
    // get common forms from the server
    return {
      title: 'טפסים נפוצים',
      forms: 1,
    };
  };

  return (
    <div className="page-container">
      <div className="form-page-top">
        <div className="header">טפסים</div>
        <Search
          placeholder={'חיפוש חופשי'}
          style={{ width: '21.17vw', height: '3.38vh', marginTop: '1.4vh' }}
        />
      </div>
      <SortBySubject
        numberOfItemsInLine={3}
        subjects={forms}
        ItemComponent={PdfPreview}
      />
    </div>
  );
};

export default FormPage;
