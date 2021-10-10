import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Typography, Upload, Button, Row } from 'antd';
import { useModel } from '@/.umi/plugin-model/useModel';
import * as XLSX from 'xlsx'

const {Title} =  Typography

export default (): React.ReactNode => {
  const {initialState,setInitialState} = useModel('@@initialState')
  const onImportExcel = (info: any) => {
    // 通过FileReader对象读取文件
    if(info.file.status === 'done'){
      const fileReader = new FileReader();
      fileReader.onload = event => {
        try {
          if(event.target){
            const { result } = event.target;
            // 以二进制流方式读取得到整份excel表格对象
            const workbook = XLSX.read(result, { type: 'binary' });
            let data = []; // 存储获取到的数据
            // 遍历每张工作表进行读取（这里默认只读取第一张表）
            for (const sheet in workbook.Sheets) {
              if (workbook.Sheets.hasOwnProperty(sheet)) {
                // 利用 sheet_to_json 方法将 excel 转成 json 数据
                data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                // break; // 如果只取第一张表，就取消注释这行
              }
            }
            // data = data.filter(item => {
            //   return item['月'] === 9
            // })
            const obj = initialState
            obj['tableData'] = data.map(item => {
              return {
                ...item,
                '零售额':Number(Number(item['零售额'])?.toFixed(0))
              }
            })
            setInitialState(obj)
            setTimeout(()=>{
              console.log(initialState)
            },200)
          }
          
        } catch (e) {
          // 这里可以抛出文件类型错误不正确的相关提示
          console.log(e);
          return;
        }
      };
      // 以二进制方式打开文件
      fileReader.readAsBinaryString(info.file.originFileObj);
      }
  }
  return (
    <PageContainer>
      <Typography>
        <Row>
          <Title>欢迎进入中石化BP数据可视化平台</Title>
        </Row>
          <Title level={3}>请先上传文件</Title>
        <Row>
        <Upload onChange={onImportExcel}>
          <Button type="primary">点击上传</Button>
        </Upload>
        </Row>
      </Typography>
    </PageContainer>
  );
};
