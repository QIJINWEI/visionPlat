import React, { useState } from 'react'
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, Button, Upload } from 'antd';
import { Line, Column } from '@ant-design/charts';
import { useModel } from '@/.umi/plugin-model/useModel';

const Analysis: React.FC = () => {

  const {initialState} = useModel('@@initialState')
  const config = {
    data:initialState?.tableData?.filter(item => {
      return item['月'] === 9
    }) || [],
    height: 400,
    xField: '区域',
    yField: '零售额',
    point: {
      size: 5,
      shape: 'diamond',
    },
    xAxis: {
      nice: true,
      label: {
        rotate: Math.PI / 6,
        offset: 12,
        style: {
          fill: '#aaa',
          fontSize: 12,
        },
      },
      title: {
        text: '区域',
        style: { fontSize: 16 },
        offset:50
      },
      line: { style: { stroke: '#aaa' } },
      tickLine: {
        style: {
          lineWidth: 2,
          stroke: '#aaa',
        },
        length: 5,
      },
      grid: {
        line: {
          style: {
            stroke: '#ddd',
            lineDash: [4, 2],
          },
        },
        alternateColor: 'rgba(0,0,0,0.05)',
      },
    },
    yAxis: {
      label: {
        autoRotate: false,
        style: {
          fill: '#aaa',
          fontSize: 12,
        },
      },
      title: {
        text: '零售额(元)',
        style: { fontSize: 16 },
      },
      line: { style: { stroke: '#aaa' } },
      tickLine: {
        style: {
          lineWidth: 2,
          stroke: '#aaa',
        },
        length: 5,
      },
      grid: {
        line: {
          style: {
            stroke: '#ddd',
            lineDash: [4, 2],
          },
        },
        alternateColor: 'rgba(0,0,0,0.05)',
      },
    },
  }

  return (
    <PageContainer>
        <Card style={{marginTop:"16px"}}>
          <Row gutter={[16,16]}>
            <Col span={24}>
              <Line {...config}></Line>
            </Col>
          </Row>
          <Row gutter={[16,16]}>
            <Col span={24}>
              <Column {...config}></Column>
            </Col>
          </Row>
        </Card>
    </PageContainer >
  )
}

export default Analysis
