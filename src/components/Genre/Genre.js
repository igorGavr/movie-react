import React from 'react';

const Genre = ({genre: {id, name}}) => {
    return (
        <div>
            <div>
                {name}
            </div>
        </div>
    );
};

export {Genre};
