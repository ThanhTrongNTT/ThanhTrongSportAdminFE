import { Sale } from "@/data/Sale.interface"
import AxiosClient from "./axiosClient/AxiosClient"

const saleAPI = {
  getAllSales: async () => {
    const url = "sales"
    return AxiosClient.get(url)
  },
  getListSales: async () => {
    const url = "sales/list"
    return AxiosClient.get(url)
  },
  createSale: async (data: Sale) => {
    const url = "sale"
    return AxiosClient.post(url, data)
  },
  updateSale: async (data: Sale) => {
    const url = `sale/${data.id}`
    return AxiosClient.put(url, data)
  },
  deleteSale: async (id: string) => {
    const url = `sale/${id}`
    return AxiosClient.delete(url)
  }
}
export default saleAPI