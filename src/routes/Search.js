import React from 'react';

const Search = ({location}) => {
    return (
        <div>
            http://localhost:3000/search?keyword=나<br/>주소창에 입력<br/><br/>
            {new URLSearchParams(location.search).get('keyword')} 검색
        </div>
    );
};

export default Search;