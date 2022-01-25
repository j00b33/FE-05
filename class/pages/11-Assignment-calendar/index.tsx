import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { useState } from 'react';

export default function LibraryCalendarPage(){
const [value, setValue] = useState()
const dateFormat = 'YYYY/MM/DD';

return(
  <Space direction="vertical" size={12}>
    <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} value = {value}/>
    <span>{value}</span>
  </Space>
)
}