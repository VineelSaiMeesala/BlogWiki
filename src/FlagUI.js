import React from 'react';
import './FlagUI.css'
function BlogCardComponent() {
  const handleClicked1 = () => {
    var BogCheckBox = document.getElementsByClassName('blog');
    if (BogCheckBox[0].checked) {
      alert('Checkbox1 is checked');
    } else {
      alert('Checkbox1 is not checked'); 
    }
  };const handleClicked2 = () => {
    var NaviCheckBox = document.getElementsByClassName('navi');
    if (NaviCheckBox[0].checked) {
      alert('Checkbox2 is checked');
    } else {
      alert('Checkbox2 is not checked'); 
    }
  };const handleClicked3 = () => {
    var OptionCheckBox = document.getElementsByClassName('option');
    if (OptionCheckBox[0].checked) {
      alert('Checkbox3 is checked');
    } else {
      alert('Checkbox3 is not checked'); 
    }
  };

  return (
    <div className='BlogCard1'>
      <h2>FlagUI</h2>
      <label className='Label'>BlogCard</label>
      <input type='checkbox' className='CheckBox blog' onClick={handleClicked1} /><br />
      <label className='Label'>Navigation</label>
      <input type='checkbox' className='CheckBox navi'onClick={handleClicked2} /><br />
      <label className='Label'>BlogCard</label>
      <input type='checkbox' className='CheckBox option' onClick={handleClicked3}/><br />
    </div>
  );
}

export default BlogCardComponent;
