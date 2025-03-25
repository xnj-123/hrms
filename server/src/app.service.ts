import { Injectable } from '@nestjs/common';
import { create } from 'domain';

@Injectable()
export class AppService {

  getServe(){
    return {
      message:'欢迎来到信达科技人力资源管理系统'
    }
  }

  getCompanyInfo(){
    return {
      companyName: '信达科技公司',
      tags:['高新技术企业','虚拟企业','很好企业','好良心企业'],
      innovatePoints: 100,
      views: 30000,
      updatedAt: '2025-01-01',
      unifiedCreditCode: '123456789abcdefg',
      legalRepresentative: '张三',
      createdDate:'2025-01-01',
      registeredCapital: '一个小目标',
      companyPhone:'01234567890X',
      companyEmail:'xindaSir@hhxy.com',
      companyWeb:'www.xinda.com',
      companyAddress:'江苏省南京市南京信息工程大学',
      baseInfo: '信达科技公司，成立于2025年1月1日，是一家从事软件开发技术服务业为主的公司，主要是用于完成毕设而创立 的虚拟公司',
      intellectualProperty:'信达科技公司项目数：1',
      actualController:'当前正在做毕设的俺',
      treatment:'verygood五险一金、下午茶、团建',
    };
  }
}
