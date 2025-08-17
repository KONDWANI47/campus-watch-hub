import { MetricCard } from "@/components/MetricCard";
import { CameraGrid } from "@/components/CameraGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Camera,
  Activity
} from "lucide-react";

const recentActivities = [
  { id: 1, action: "New student registered", student: "Emma Johnson", time: "2 minutes ago", type: "info" },
  { id: 2, action: "Attendance marked", class: "Math 101", time: "15 minutes ago", type: "success" },
  { id: 3, action: "Camera offline", location: "Library", time: "1 hour ago", type: "warning" },
  { id: 4, action: "Assignment submitted", student: "John Doe", time: "2 hours ago", type: "info" },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-primary text-white p-6 rounded-lg shadow-medium">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Administrator</h1>
        <p className="text-white/90">Here's what's happening at your school today</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Students"
          value="1,247"
          change="+12 this month"
          icon={GraduationCap}
          trend="up"
        />
        <MetricCard
          title="Active Teachers"
          value="89"
          change="+3 new hires"
          icon={Users}
          trend="up"
        />
        <MetricCard
          title="Classes Today"
          value="156"
          change="Schedule on track"
          icon={BookOpen}
          trend="neutral"
        />
        <MetricCard
          title="Attendance Rate"
          value="94.2%"
          change="+2.1% vs last week"
          icon={TrendingUp}
          trend="up"
        />
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.student || activity.class || activity.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      activity.type === "success" ? "secondary" :
                      activity.type === "warning" ? "destructive" : "outline"
                    }>
                      {activity.type === "success" && <CheckCircle className="h-3 w-3 mr-1" />}
                      {activity.type === "warning" && <AlertTriangle className="h-3 w-3 mr-1" />}
                      {activity.type === "info" && <Clock className="h-3 w-3 mr-1" />}
                      {activity.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Today's Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Present Students</span>
                <span className="font-semibold">1,174</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Absent Students</span>
                <span className="font-semibold text-warning">73</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Late Arrivals</span>
                <span className="font-semibold text-info">23</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Active Cameras</span>
                <span className="font-semibold text-success">5/6</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Security Monitoring */}
      <Card className="shadow-soft">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Live Security Monitoring
          </CardTitle>
          <Button variant="outline" size="sm">
            View All Cameras
          </Button>
        </CardHeader>
        <CardContent>
          <CameraGrid />
        </CardContent>
      </Card>
    </div>
  );
}