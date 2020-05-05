import React from 'react'
import styled from 'styled-components'

const FlexRowWrapper = styled.div`
    display: flex;
`

const FlexColumnWrapper = styled.div`
    display: flex;
    flex-direction: column
`

const RowCard = styled.div`
    padding: 5em;
    background-color: #2f3640;
    color: #f5f6fa;
    font-family: 'Roboto Slab', serif;
    width: 35%;
    margin: 2%;
    display: flex;
    justify-content: center;
`;

const ColumnCard = styled.div`
    padding: 5em;
    background-color: #2f3640;
    color: #f5f6fa;
    font-family: 'Roboto Slab', serif;
    width: 35%;
    margin: 2%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;


export default function Cards() {
    return (
        <>
        <FlexRowWrapper>
            <ColumnCard>
                <h1>This is a Card Inside a FlexRowWrapper</h1>
                <h2>Children into columns</h2>
            </ColumnCard>
            <ColumnCard>
                <h1>This is a Card Inside a FlexRowWrapper</h1>
                <h2>Children into columns</h2>
            </ColumnCard>
            <ColumnCard>
                <h1>This is a Card Inside a FlexRowWrapper</h1>
                <h2>Children into columns</h2>
            </ColumnCard>
        </FlexRowWrapper>

        <FlexColumnWrapper>
            <RowCard>
                <h1>This is a Card Inside a FlexColumnWrapper</h1>
                <h2>Children into rows</h2>
            </RowCard>
            <RowCard>
                <h1>This is a Card Inside a FlexColumnWrapper</h1>
                <h2>Children into rows</h2>
            </RowCard>
            <RowCard>
                <h1>This is a Card Inside a FlexColumnWrapper</h1>
                <h2>Children into rows</h2>
            </RowCard>
        </FlexColumnWrapper>
        </>
    )
}
