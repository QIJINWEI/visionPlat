import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '中石化BP数据可视化平台',
  pwa: false,
  logo: 'https://cdn.cdnlogo.com/logos/b/69/bp.svg',
  iconfontUrl: '',
};

export default Settings;
