import ProtectedRoute from '@/ProtectedRoute/ProtectedRoute'
import React from 'react'

function Dashboard() {
  return (
    <div>
      this is dashboard page
    </div>
  )
}

export default ProtectedRoute(Dashboard);