import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Maximize2, MoreVertical, Play, Square } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const cameras = [
  { id: 1, name: "Main Entrance", location: "Building A", status: "online", recording: true },
  { id: 2, name: "Hallway A1", location: "Building A - Floor 1", status: "online", recording: true },
  { id: 3, name: "Cafeteria", location: "Building B", status: "online", recording: false },
  { id: 4, name: "Library", location: "Building C", status: "offline", recording: false },
  { id: 5, name: "Playground", location: "Outdoor", status: "online", recording: true },
  { id: 6, name: "Parking Lot", location: "Outdoor", status: "online", recording: true },
];

export function CameraGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cameras.map((camera) => (
        <Card key={camera.id} className="shadow-soft hover:shadow-medium transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">{camera.name}</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Maximize2 className="h-4 w-4 mr-2" />
                    Fullscreen
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Play className="h-4 w-4 mr-2" />
                    View Recording
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-sm text-muted-foreground">{camera.location}</p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Camera Feed Placeholder */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              {camera.status === "online" ? (
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Live Feed</p>
                  </div>
                  {/* Recording Indicator */}
                  {camera.recording && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      REC
                    </div>
                  )}
                  {/* Status Indicator */}
                  <div className="absolute top-2 left-2">
                    <Badge variant={camera.status === "online" ? "secondary" : "destructive"}>
                      {camera.status}
                    </Badge>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2 opacity-50" />
                  <p className="text-sm text-muted-foreground">Camera Offline</p>
                </div>
              )}
            </div>
            
            {/* Camera Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant={camera.status === "online" ? "secondary" : "destructive"}>
                  {camera.status}
                </Badge>
                {camera.recording && (
                  <Badge variant="destructive" className="gap-1">
                    <Square className="h-3 w-3 fill-current" />
                    Recording
                  </Badge>
                )}
              </div>
              <Button variant="outline" size="sm">
                <Maximize2 className="h-4 w-4 mr-2" />
                View
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}