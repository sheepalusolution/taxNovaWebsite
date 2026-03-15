// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const API_ENDPOINTS = {
  MENU_ITEMS: `${API_BASE_URL}/api/menu-items?populate[0]=children&populate[1]=menu&filters[parent][$null]=true`,
}
