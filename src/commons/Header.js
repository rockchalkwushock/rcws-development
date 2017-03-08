import React from 'react';

const Header = () => (
  <div className="app-header centered">
    <div className="profile-picture">
      <img src="https://scontent.fmci1-2.fna.fbcdn.net/v/t1.0-9/13528790_1630708897257820_1406821413840455749_n.jpg?oh=ce8dcf87a15e210d983a161f1093bedf&oe=590884A7" alt=""/>
    </div>
    <div className="card">
      <div className="card-header">
        <h2>Cody Brunner</h2>
        <p>Aspiring Web Developer</p>
        <p>React | Redux | Node | MongoDB</p>
      </div>
      <div className="card-social">
        <a className='icon' target='_blank' href='https://github.com/rockchalkwushock' title='github'>
          <i className="fa fa-github fa-2x"></i>
        </a>
        <a className='icon' target='_blank' href='https://www.linkedin.com/in/cody-brunner-6aaa1880/' title='linkedin'>
          <i className="fa fa-linkedin-square fa-2x"></i>
        </a>
        <a className='icon' target='_blank' href='https://angel.co/rockchalkwushock' title='angel-list'>
          <i className="fa fa-angellist fa-2x"></i>
        </a>
        <a className='icon' target='_blank' href='http://stackoverflow.com/users/6520579/cody?tab=profile' title='stack-overflow'>
          <i className="fa fa-stack-overflow fa-2x"></i>
        </a>
        <a className='icon' href='mailto:rockchalkwushock@icloud.com' title='email'>
          <i className="fa fa-envelope fa-2x"></i>
        </a>
        <a className='icon' href='https://www.dropbox.com/s/5mc2a3iafuoijnt/Cody%20A%20Brunner%20-%20Web%20Developer%20Resume.pdf?dl=1' title='resume'>
          <i className="fa fa-file-text fa-2x"></i>
        </a>
      </div>
    </div>
  </div>
);

export default Header;
