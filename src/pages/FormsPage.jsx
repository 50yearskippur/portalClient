import React from 'react';
import './FormsPage.css';
import PdfPreview from '../components/ItemsComponents/PdfPreview';
import Search from '../components/Search/Search';
import SortBySubject from '../components/SortBySubject/SortBySubject';
import { formsSubjects } from '../constants/forms';

const FormPage = () => {

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
        subjects={formsSubjects}
        ItemComponent={PdfPreview}
      />
    </div>
  );
};

export default FormPage;
